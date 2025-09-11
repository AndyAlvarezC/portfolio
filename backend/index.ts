import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Configuración más específica de CORS
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173", // URL de tu frontend
    credentials: true,
  })
);

app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.json({ message: "API funcionando correctamente" });
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Validación más robusta
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res
      .status(400)
      .json({ success: false, message: "Todos los campos son obligatorios" });
  }

  // Validación básica de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: "Email no válido" });
  }

  try {
    // Verificar que las variables de entorno existan
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error(
        "Variables de entorno EMAIL_USER o EMAIL_PASS no configuradas"
      );
      return res
        .status(500)
        .json({
          success: false,
          message: "Error de configuración del servidor",
        });
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verificar la configuración del transporter
    await transporter.verify();

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nuevo mensaje desde tu portfolio</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensaje:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
        </div>
      `,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    console.log(`Mensaje enviado correctamente desde: ${email}`);
    res
      .status(200)
      .json({ success: true, message: "Mensaje enviado correctamente!" });
  } catch (error) {
    console.error("Error al enviar email:", error);

    if (error instanceof Error) {
      // Errores específicos de nodemailer
      if (error.message.includes("Invalid login")) {
        console.error(
          "Error de autenticación: Verifica EMAIL_USER y EMAIL_PASS"
        );
      }
    }

    res.status(500).json({
      success: false,
      message: "Error al enviar el mensaje. Intenta de nuevo más tarde.",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
  console.log(`Email configurado: ${process.env.EMAIL_USER ? "Sí" : "No"}`);
});
