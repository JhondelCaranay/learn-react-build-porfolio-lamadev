import "./Topbar.scss";
import { Mail, Person } from "@mui/icons-material";
const Topbar = ({ setMenuOpen, menuOpen }) => {
	return (
		<div className={"topbar " + (menuOpen && "active")} id="topbar">
			<div className="wrapper">
				<div className="left">
					<a href="#intro" className="logo">
						Del.
					</a>
					<div className="itemContainer">
						<Person className="icon" />
						<span>+0995 460 9540</span>
					</div>
					<div className="itemContainer">
						<Mail className="icon" />
						<span>jhondeldelconacaranay@gmail.com</span>
					</div>
				</div>
				<div className="right">
					<div
						className="hamburger"
						onClick={() => setMenuOpen(!menuOpen)}
					>
						<span className="line1"></span>
						<span className="line2"></span>
						<span className="line3"></span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Topbar;
