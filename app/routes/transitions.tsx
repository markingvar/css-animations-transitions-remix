import {Link} from "@remix-run/react";

import transitionStyles from "~/styles/transition.css";

export function links() {
    return [
    {rel: "stylesheet", href: transitionStyles},
    ];
}   

export default function TransitionsRoute() {
  return (
    <div>
      <h1>Transitions</h1>
      <p>
        <Link to="/">Home</Link>
      </p>

      <form className="ui-form">
      <input className="ui-input" type="email" placeholder="your@email.com" />
      <button className="ui-button" type="submit">
        <span>Subscribe</span>
      </button>
    </form>
    </div>
  );
}
