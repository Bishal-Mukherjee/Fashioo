import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import PasswordInput from '../../components/passwordInput';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import AnimatedButton from './CustomButton';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(0),
        [theme.breakpoints.up('md')]: {
            margin: theme.spacing(16),
            marginLeft: theme.spacing(32),
            marginRight: theme.spacing(32),
        },
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        background: 'transparent',
        boxShadow: 'none',
    },
    grid: {
        borderRadius: '10px',
        boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    },
    welcomeHead: {
        marginTop: '3em',
        color: '#fff',
        fontWeight: '700',
    },
    subHead: {
        color: '#fff',
        fontWeight: '500',
        marginBottom: '1.5em',
    },
    registerBtn: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    head: {
        marginTop: '1em',
        color: 'rgb(22, 12, 66)',
        fontWeight: '700',
        marginBottom: '1.5em',
    },
    control: {
        borderRadius: '10px 0 0 10px',
        background: 'linear-gradient(to right, #FF4B2B, #FF416C)',
    },
    input: {
        width: '14em',
    },
    caption: {
        marginTop: '5em',
        width: '10em',
        margin: 'auto',
        marginBottom: '1em',
    },
    btn: {
        width: '12em',
        height: '4em',
        borderRadius: '30px',
        boxShadow:
            '-10px -10px 15px rgba(255, 255, 255, 0.5), 10px 10px -15px rgba(70, 70, 70, 0.12)',
    },
}));

const Login = () => {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

    const [input, setInput] = useState({
        email: '',
        password: '',
    });

    // For testing purpose
    useEffect(() => {
        // console.log(input);
        // Call Submit API
    }, [input]);

    const handleChange = (event) => {
        setInput({
            ...input,
            ['email']: event.target.value,
        });
    };

    const handleSubmit = (password) => {
        setInput({
            ...input,
            ['password']: password,
        });
    };

    return (
        <div className={classes.root}>
            <Grid className={classes.grid} container spacing={3}>
                <Grid className={classes.control} item xs={12} md={6}>
                    <Paper className={classes.paper}>
                        <Typography
                            className={classes.welcomeHead}
                            variant='h2'
                            component='h2'
                            gutterBottom
                        >
                            Are you new at Fashioo?
                        </Typography>
                        <Typography
                            className={classes.subHead}
                            variant='h4'
                            component='h2'
                            gutterBottom
                        >
                            Register Today
                        </Typography>

                        <div className={classes.registerBtn}>
                            <AnimatedButton />
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper}>
                        <Paper className={classes.paper}>
                            <Typography
                                className={classes.head}
                                variant='h4'
                                component='h2'
                                gutterBottom
                            >
                                Sign into your account
                            </Typography>

                            <TextField
                                className={classes.input}
                                color='secondary'
                                id='standard-basic'
                                label='Email'
                                value={input.email}
                                onChange={handleChange}
                            />

                            <PasswordInput
                                color='secondary'
                                label='Password'
                                name='password'
                                handleSubmit={handleSubmit}
                            />

                            <Link href='#' onClick={preventDefault}>
                                <Typography
                                    className={classes.caption}
                                    variant='caption'
                                    display='block'
                                    gutterBottom
                                >
                                    Forgot Password?
                                </Typography>
                            </Link>

                            <Button
                                className={classes.btn}
                                variant='contained'
                                color='secondary'
                            >
                                Log In
                            </Button>
                        </Paper>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default Login;

/**
 * <Helmet>
        <title>Login | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "background.default",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("Must be a valid email")
                .max(255)
                .required("Email or Username is required"),
              password: Yup.string().max(255).required("Password is required"),
            })}
            onSubmit={(values) => {
              //navigate('/app/dashboard', { replace: true });
              console.log(history);
              performLogin({
                username: values.email,
                password: values.password,
              })
                .then((response) => {
                  console.log(response);
                  history.push("/dashboard");
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                  <Typography color="textPrimary" variant="h2">
                    Login
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Sign in on the internal platform
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Address / User Name"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                  size="small"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                  size="small"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="small"
                    type="submit"
                    variant="contained"
                  >
                    Sign in now
                  </Button>
                </Box>
                <Typography color="textSecondary" variant="body1">
                  Don&apos;t have an account?{" "}
                  <Link
                    component={RouterLink}
                    to="user-registration"
                    variant="h6"
                  >
                    Sign up
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
 */
