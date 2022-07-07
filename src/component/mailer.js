import emailjs from 'emailjs-com';

const Mailer = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_1xse0vn',
        'template_25ygwow',
        e.target,
        'RFb7SuEjHjqaDYdoo'
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div
      className='container border'
      style={{
        marginTop: '50px',
        width: '50%',
        backgroundImage: `url('https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <h1 style={{ marginTop: '25px' }}>Contact Form</h1>
      <form
        className='row'
        style={{ margin: '25px 85px 75px 100px' }}
        onSubmit={sendEmail}
      >
        <label>name</label>
        <input type='text' name='name' className='form-control' />

        <label>Email</label>
        <input type='email' name='user_email' className='form-control' />

        <label>Message</label>
        <textarea name='message' rows='4' className='form-control' />
        <input
          type='submit'
          value='Send'
          className='form-control btn btn-primary'
          style={{ marginTop: '30px' }}
        />
      </form>
    </div>
  );
};

export default Mailer;
