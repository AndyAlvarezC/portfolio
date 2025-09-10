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
            }, 3000)
        } else if (!isTyping && text.length > 0) {
            timeoutId = setTimeout(() => {
                setText(text.slice(0, -1))
            }, 100)
        } else if (!isTyping && text.length === 0) {
            setTimeout(() => setIsTyping(true), 500)
        }

        return () => clearTimeout(timeoutId)
    }, [text, isTyping, textToAnimate])

    return (
        <div className="relative whitespace-nowrap">
            <span className="invisible text-2xl sm:text-4xl lg:text-5xl font-bold">{textToAnimate}</span>
            
            <span className="absolute left-0 top-0 text-[var(--main-color)] text-2xl sm:text-4xl lg:text-5xl font-bold">
                {text}<span className="animate-pulse text-white font-light">|</span>
            </span>
        </div>
    )
}