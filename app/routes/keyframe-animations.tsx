    import {Link} from "@remix-run/react";

    export default function KeyframeAnimationsRoute() {
      return (
              <form class="ui-form">
              <input class="ui-input" type="email" placeholder="your@email.com" />
              <button class="ui-button" type="button" onclick="setState('subscribing')">
              <span>Subscribe</span>
              </button>
              </form>
      );
    }

