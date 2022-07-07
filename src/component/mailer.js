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
        marginBottom: '50%',
        width: '150%',
        height: '50%',
        backgroundImage: `url('https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/291846095_483133866951235_7392436863046212683_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-K1LGFAjJw0AX-sAOcw&_nc_ht=scontent-dfw5-2.xx&oh=00_AT_pxrUanTtIwcQJSFbMJE0_4wmbMMxkLBlYTQFENc6-Gg&oe=62CC3535')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <h1 style={{ marginTop: '25px', color: 'white' }}>Contact Form</h1>
      <form
        className='row'
        style={{ margin: '25px 85px 75px 100px' }}
        onSubmit={sendEmail}
      >
        <label style={{ color: 'white', fontWeight: 'bold' }}>
          Parent Name
        </label>
        <input type='text' name='parentName' className='form-control' />

        <label style={{ color: 'white', fontWeight: 'bold' }}>
          Parent Phone
        </label>
        <input type='number' name='parentPhone' className='form-control' />

        <label style={{ color: 'white', fontWeight: 'bold' }}>
          Parent Email
        </label>
        <input type='email' name='parentEmail' className='form-control' />

        <label style={{ color: 'white', fontWeight: 'bold' }}>
          Parent Address
        </label>
        <input type='text' name='parentAddress' className='form-control' />

        <label style={{ color: 'white', fontWeight: 'bold' }}>
          Player Name
        </label>
        <input type='text' name='playerName' className='form-control' />

        <label style={{ color: 'white', fontWeight: 'bold' }}>
          Player Current Team
        </label>
        <input type='text' name='playerCurrentTeam' className='form-control' />

        <label style={{ color: 'white', fontWeight: 'bold' }}>
          Player Date Of Birth
        </label>
        <input type='text' name='playerDOB' className='form-control' />

        <label style={{ color: 'white', fontWeight: 'bold' }}>
          Player Primary Position
        </label>
        <input
          type='text'
          name='playerPrimaryPosition'
          className='form-control'
        />

        <label style={{ color: 'white', fontWeight: 'bold' }}>
          Player Secondary Position
        </label>
        <input
          type='text'
          name='playerSecondaryPosition'
          className='form-control'
        />

        <label style={{ color: 'white', fontWeight: 'bold' }}>
          Notable Accomplishments / Recognitions
        </label>
        <textarea name='message' rows='2' className='form-control' />
        <input
          type='submit'
          value='Submit'
          className='form-control btn btn-primary'
          style={{ marginTop: '75px' }}
        />
      </form>
    </div>
  );
};

export default Mailer;
