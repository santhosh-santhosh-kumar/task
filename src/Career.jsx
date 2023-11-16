export function Career() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem;" }}>
              <img
                src="data:image/jpeg;base64,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"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h4>Product-Based Companies</h4>
                <p className="card-text">
                Who is a product manager? What are the best product-based companies for product managers in
                </p>
                <p className="read">READ MORE &gt;&gt;</p>
             </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem;" }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4V5yhJe6CBVND2fKKcaLqd6i1h5ye3823ZA&usqp=CAU"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h4>Companies for AI Freshers</h4>
                <p className="card-text">
                Artificial intelligence (AI) has revolutionized various industries, and the demand for AI professionals is at
                </p>
                <p className="read">READ MORE &gt;&gt;</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem;" }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEyq_jXOpPcM7SXHtyI8E8sa8HDZX358Sgxw&usqp=CAU"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h4>Companies for UI/UX Designers</h4>
                <p className="card-text">
                As product-based companies continually innovate and strive to stay ahead of the competition, they seek
                </p>
                <p className="read">READ MORE &gt;&gt;</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem;" }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQG30WqshNW1e9qJX1lgL4or4Zn1lGpfRMsA&usqp=CAU"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h4>Best Product-Based Companies for Game Developers in 2023</h4>
                <p className="card-text">
                The world of game development has been booming in recent years as the importance of
                </p>
                <p className="read">READ MORE &gt;&gt;</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem;" }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMmcfipYmlKURmNDw8TPu7h9ilH5BXfw75WQ&usqp=CAU"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h4>Software Developer vs Software Engineer:</h4>
                <p className="card-text">
                In the tech world, two roles play an important role in deciding our digital life,
                </p>
                <p className="read">READ MORE &gt;&gt;</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem;" }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyYhVg9UYbKonX3j8vYR7FKKQsRhrGWCQofQ&usqp=CAU"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h4>Companies for Data Science Freshers</h4>
                <p className="card-text">
                In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing
                </p>
                <p className="read">READ MORE &gt;&gt;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function TopCareer() {
  return (
    <>
    <img src="https://www.guvi.in/blog/wp-content/uploads/2022/04/July-last-week-offer-cover-scaled.webp" className="topImg" alt="" /></>
  )
}

