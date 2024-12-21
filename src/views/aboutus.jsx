const AboutUs = () => {
  return (
    <div>
      <h2 className="mb-2">Our mission</h2>
      <p className="mb-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro odio veritatis quas debitis nisi dignissimos quis, laudantium quod obcaecati officia sit necessitatibus. Laudantium odit,
        voluptatibus amet minus modi enim earum, quidem ratione quas provident eos illo quae repellendus aliquam dolorum, voluptate laborum illum autem sapiente doloremque reiciendis alias veniam
        dolores!
      </p>
      <h2 className="mb-2">Our history</h2>
      <p className="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quis distinctio deleniti vel suscipit in similique facilis pariatur sunt modi libero perspiciatis, voluptates repellendus quo
        nemo, consequuntur dolorum tempore expedita?
      </p>
      <h2 className="mb-2">Our team</h2>

      {/* team cards */}
      <div className="d-flex row gap-4 w-50">
        <div className="card">
          <img src="https://picsum.photos/200" className="card-img" />
          <div className="card-body">
            <h3 className="card-title">SHafin</h3>
            <p className="card-subtitle">Programmer</p>
          </div>
        </div>
        <div className="card">
          <img src="https://picsum.photos/200" className="card-img" />
          <div className="card-body">
            <h3 className="card-title"> SHafin</h3>
            <p className="card-subtitle">Programmer</p>
          </div>
        </div>
        <div className="card">
          <img src="https://picsum.photos/200" className="card-img" />
          <div className="card-body">
            <h3 className="card-title"> SHafin</h3>
            <p className="card-subtitle">Programmer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;