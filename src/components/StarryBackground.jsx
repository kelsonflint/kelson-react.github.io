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

        {/* Pass sunrise state + toggle handler to children (like HeroSection) */}
        {React.Children.map(this.props.children, (child, index) => {
          if (React.isValidElement(child)) {
            // Only add sun and overlay to first child (HeroSection)
            if (index === 0) {
              return (
                <div style={{ position: 'relative', minHeight: '100vh' }}>
                  <div id="sun" className={sunrise ? "sun sun-rise" : "sun"}></div>
                  <div className={`day-overlay ${sunrise ? "sunrise" : ""}`} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none' }} />
                  {React.cloneElement(child, {
                    sunrise,
                    onToggleSunrise: this.handleSunrise,
                  })}
                </div>
              );
            }
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
