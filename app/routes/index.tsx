import {Link} from "@remix-run/react"
export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
      <li>
      <Link to="/transitions">Transitions</Link>
      </li>
      <li>
      <Link to="/keyframe-animations">Keyframe Animations</Link>
      </li>
      </ul>
<div className="ball" />
{false && <script dangerouslySetInnerHTML={{
  __html: `document.body.addEventListener("click", () => {
      document.body.style.setProperty("--primary-color", "red");
    })`
}} /> 
}
    </div>
  );
}
