import { useState, useEffect } from "react"

export default function TextAnimation() {
    const textToAnimate = "< Frontend Developer /> ;"
    
    const [text, setText] = useState("")
    const [isTyping, setIsTyping] = useState(true)

    useEffect(() => {
        let timeoutId = 0;

        if (isTyping && text.length < textToAnimate.length) {
            timeoutId = setTimeout(() => {
                setText(textToAnimate.slice(0, text.length + 1))
            }, 100)
        } else if (isTyping && text.length === textToAnimate.length) {
            timeoutId = setTimeout(() => {
                setIsTyping(false)
            }, 2000)
        } else if (!isTyping && text.length > 0) {
            timeoutId = setTimeout(() => {
                setText(text.slice(0, -1))
            }, 50)
        } else if (!isTyping && text.length === 0) {
            setIsTyping(true)
        }

        return () => clearTimeout(timeoutId)
    }, [text, isTyping, textToAnimate])

    return (
        <span className="text-[var(--main-color)] text-6xl font-bold">{text}<span className="animate-pulse text-white font-light">|</span></span>
    )
}