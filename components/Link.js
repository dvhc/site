import { Link } from "rebass"

export default ({ sx, ...props }) =>
    <Link sx={{
        color: "primary",
        textDecoration: "none",
        ":hover": {
            color: "secondary",
            textDecoration: "underline",
            ...sx
        }
    }} {...props} />