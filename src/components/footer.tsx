import * as React from "react"

const Footer = () => {
  return (
    <footer className="bg-gray-400 py-3">
        <div className="content">
      © {new Date().getFullYear()}, Built by
      {` `}
      <a href="https://github.com/axyz">axyz</a>
        </div>
    </footer>
  )
}

export default Footer
