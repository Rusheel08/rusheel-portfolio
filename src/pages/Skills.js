export default function Skills() {
  const skills = [
    "Python","Data Structures","Machine Learning",
    "NumPy","Pandas","Scikit-Learn","TensorFlow",
    "Backend Development","OCR Automation",
    "LLMs","Langfuse","Postman"
  ];

  return (
    <div className="section">
      <h2>Skills</h2>
      <div className="grid">
        {skills.map((s, i) => <div key={i} className="card">{s}</div>)}
      </div>
    </div>
  );
}
