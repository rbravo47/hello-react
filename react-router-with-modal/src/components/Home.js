import { Link, useLocation } from "react-router-dom";
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
export const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const Home = () => {

    let location = useLocation();
    const classes = useStyles();
    return (
        <>
            <h2>With QueryString Routing, and a reload won't use the modal</h2>
            <Grid container spacing={3} className={classes.root}>
                {
                    data.map((id, i) => (
                        <Grid item xs={3} key={i}>
                            <Link
                                to={
                                    {
                                        pathname: `/posts/${id}`,
                                        // this is the trick?
                                        state: { background: location }
                                    }
                                }

                            >
                                <Paper className={classes.paper}>{id}</Paper>
                            </Link>
                        </Grid>
                    ))
                }
            </Grid>
        </>
    );
};

export default Home;