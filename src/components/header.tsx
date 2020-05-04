import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, siteDescription }) => (
    <header className="mb-12 py-3 bg-red-500">
        <div className="content">
      <Link to="/">
        <h1 className="text-gray-200">
          {siteTitle}
        </h1>
      </Link>
    <h3>
        {siteDescription}
    </h3>
        </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
