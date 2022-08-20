import "./contact.css";
import MiniNav from "./MiniNav";

const Contact = () => {
  return (
    <div className="contact__wrapper">
      <MiniNav />
      <div className="contact__div">
        <h3>
          If you have any questions for us, be free to ask anything through this
          form...
        </h3>
        <p>
          Your <b>GoodSales!</b>
        </p>
        <hr />
        <form>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
          />
          <textarea name="" id="" cols="40" rows="12" placeholder="Your Question...."></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
