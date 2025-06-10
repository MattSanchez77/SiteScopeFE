function About() {
    return (
      <div className="about-container">
        <h1 className="about-title">About SiteScope</h1>
        <p className="about-slogan">Stay ahead of the build.</p>
  
        <p className="about-text">
          SiteScope is a full-stack web application that helps Colorado residents stay informed
          about local development. By searching with a ZIP code, users can explore what’s being
          built in their neighborhoods — from restaurants and housing to pharmacies and retail.
        </p>
  
        <h2>Why SiteScope?</h2>
        <p className="about-text">
          Most people don’t know what’s being built in their area until construction is already
          underway. SiteScope solves that by making permit data and project summaries more accessible
          and visual — giving you insight before the concrete is poured.
        </p>
  
        <h2>Features</h2>
        <ul className="about-list">
          <li>🔍 Search by ZIP code</li>
          <li>📄 View detailed site information</li>
          <li>💾 Custom backend API with full CRUD</li>
          <li>⚙️ Built using the MERN stack</li>
        </ul>
  
        <h2>Technology</h2>
        <ul className="about-list">
          <li>React + Vite</li>
          <li>Node.js + Express</li>
          <li>MongoDB with Mongoose</li>
          <li>Thunder Client for API testing</li>
        </ul>
      </div>
    );
  }
  
  export default About;