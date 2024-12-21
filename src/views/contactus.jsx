const ContactUs = () => {
  return (
    <div className="p-4">
      <h2>Contact Us</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero aliquid, fugiat nihil, quidem aliquam eaque reprehenderit voluptates error consectetur dolores aperiam voluptate quis ratione,
        fuga officiis consequatur pariatur aut deserunt quam culpa! Aut expedita enim doloribus sunt veniam magnam magni?
      </p>

      <form action="#" className="d-flex flex-column gap-4 w-25 p-4">
        <label htmlFor="">Name</label>
        <input type="text" className="rounded" />

        <label htmlFor="">Phone</label>
        <input type="text" className="rounded" />

        <label htmlFor="">Email</label>
        <input type="email" className="rounded" />

        <button type="submit" className="w-25 btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;