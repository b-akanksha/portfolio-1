import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [showToast, setShowToast] = React.useState(false);

  const handleOnClick = () => setShowToast(false);

  const Toast = () => {
    return (
      <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header bg-dark">
          <strong class="me-auto">Yahooo!</strong>
          <button
            onClick={handleOnClick}
            type="button"
            class="ml-2 mb-1 close"
            data-dismiss="toast"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="toast-body">Mail sent successfully !!</div>
      </div>
    );
  };

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message,
      };
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      setShowToast(true);
      reset();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="container" id="contact-me">
        <p className="section-title">Contact Me</p>
        <div className="row">
          <div className="col-12 text-center">
            <form
              id="contact-form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              {/* Row 1 of form */}
              <div className="row formRow">
                <div className="col-sm-12 col-md-6">
                  <input
                    type="text"
                    name="name"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Please enter your name",
                      },
                      maxLength: {
                        value: 30,
                        message: "Please use 30 characters or less",
                      },
                    })}
                    className="form-control formInput"
                    placeholder="Name"
                  ></input>
                  {errors.name && (
                    <span className="errorMessage">{errors.name.message}</span>
                  )}
                </div>
                <div className="col-sm-12 col-md-6">
                  <input
                    type="email"
                    name="email"
                    {...register("email", {
                      required: true,
                      pattern:
                        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    })}
                    className="form-control formInput"
                    placeholder="Email address"
                  ></input>
                  {errors.email && (
                    <span className="errorMessage">
                      Please enter a valid email address
                    </span>
                  )}
                </div>
              </div>
              {/* Row 2 of form */}
              <div className="row formRow">
                <div className="col">
                  <input
                    type="text"
                    name="subject"
                    {...register("subject", {
                      required: {
                        value: true,
                        message: "Please enter a subject",
                      },
                      maxLength: {
                        value: 75,
                        message: "Subject cannot exceed 75 characters",
                      },
                    })}
                    className="form-control formInput"
                    placeholder="Subject"
                  ></input>
                  {errors.subject && (
                    <span className="errorMessage">
                      {errors.subject.message}
                    </span>
                  )}
                </div>
              </div>
              {/* Row 3 of form */}
              <div className="row formRow">
                <div className="col">
                  <textarea
                    rows={3}
                    name="message"
                    {...register("message", {
                      required: true,
                    })}
                    className="form-control formInput"
                    placeholder="Message"
                  ></textarea>
                  {errors.message && (
                    <span className="errorMessage">Please enter a message</span>
                  )}
                </div>
              </div>
              <button className="btn-main-contact-me" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      {showToast && <div className="toast-container"><Toast /></div>}
    </>
  );
};

export default ContactMe;
