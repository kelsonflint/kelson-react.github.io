import React from "react";
import WOW from "wowjs";

export default class StarryBackground extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sunrise: false };
  }

  componentDidMount() {
    new WOW.WOW().init();
  }

  handleSunrise = () => {
    this.setState((prev) => ({ sunrise: !prev.sunrise }));
  };

  render() {
    const { sunrise } = this.state;

    return (
      <div className={`sky ${sunrise ? "sky-day" : ""}`} id="my-background">
        <div className={`stars ${sunrise ? "stars-hidden" : ""}`}></div>
        <div className={`stars ${sunrise ? "stars-hidden" : ""}`} id="stars2"></div>
        <div className={`stars ${sunrise ? "stars-hidden" : ""}`} id="stars3"></div>

        <div id="sun" className={sunrise ? "sun sun-rise" : "sun"}></div>
        <div className={`day-overlay ${sunrise ? "sunrise" : ""}`} />

        {/* Pass sunrise state + toggle handler to children (like HeroSection) */}
        {React.Children.map(this.props.children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              sunrise,
              onToggleSunrise: this.handleSunrise,
            });
          }
          return child;
        })}
      </div>
    );
  }
}
