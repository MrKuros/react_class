function SignUp() {
    return (
        <div>
            <form action="" method="post">
                <div class="container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />
                    <label for="uname"><b>Email</b></label>
                    <input type="email" placeholder="Enter Email" name="uname" required />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />
                    <label for="psw"><b>Confirm Password</b></label>
                    <input type="password" placeholder="Confirm Password" name="psw" required />

                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp;