const AuthLoginPage = (props) => {

    const onSubmit = (e) => {
      e.preventDefault()

      const { value } = e.target[0]
      props.onAuth({ username: value, secret: value })
    }
  
    return (
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">Welcome To ChatHub</div>
  
          <div className="form-subtitle">Create a username to start chatting!</div>
  
          <div className="auth">
            <div className="auth-label">Username</div>
            <input className="auth-input" name="username" />
            <button className="auth-button" type="submit">
              Enter
            </button>
          </div>
        </form>
      </div>
    )
  }
  
  export default AuthLoginPage;