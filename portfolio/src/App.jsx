import './index.css'

function App() {
  return (
    <div style={{padding: "40px", fontFamily: "Arial", color: "white", background: "#0f172a", minHeight: "100vh"}}>
      
      <h1 style={{fontSize: "40px"}}>Rishi Rajesh Verma</h1>
      <h2>AI/ML Engineer | Data Science Enthusiast</h2>

      <p style={{marginTop: "20px"}}>
        Aspiring AI/ML Engineer building intelligent systems with real-world impact.
      </p>

      <div style={{marginTop: "30px"}}>
        <a href="/resume.pdf" download style={{marginRight: "20px", padding: "10px", background: "blue", color: "white"}}>
          Download Resume
        </a>

        <a href="https://github.com/rishiv989" target="_blank">
          GitHub
        </a>
      </div>

      <h2 style={{marginTop: "40px"}}>Projects</h2>

      <ul>
        <li>RAG-Based AI Teaching Assistant</li>
        <li>Explainable AI for Aircraft Failure Diagnosis</li>
      </ul>

    </div>
  )
}

export default App