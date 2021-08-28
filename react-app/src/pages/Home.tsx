import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';

import '../css/Home.css'

const useStyles = makeStyles({
    root: {
        maxWidth: 350,
    },
});

const Home = () => {

    const classes = useStyles();

    const data = [
        { title: "単回帰", discription: "簡単な回帰" },
        { title: "単回帰2", discription: "簡単な回帰2" },
        { title: "単回帰3", discription: "簡単な回帰3" },
    ]

    return (

        <>
            <div className='home-title '>
                <h1>機械学習手法の選択</h1>
            </div>

            <section className="section"> <h1>supervised</h1>  </section>

            <Grid container spacing={1} alignItems="center" justify="center">
                <Grid item xs={3}>
                    <Card className={classes.root}>
                        <CardActionArea>

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {data[0].title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {data[0].discription}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={3}>
                    <Card className={classes.root}>
                        <CardActionArea>

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    単回帰分析
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    一番簡単な線形回帰
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={3}>
                    <Card className={classes.root}>
                        <CardActionArea>

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    単回帰分析
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    一番簡単な線形回帰
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>

            <Grid container spacing={1} alignItems="center" justify="center">
                <Grid item xs={3}>
                    <Card className={classes.root}>
                        <CardActionArea>

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {data[0].title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {data[0].discription}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={3}>
                    <Card className={classes.root}>
                        <CardActionArea>

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    単回帰分析
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    一番簡単な線形回帰
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={3}>
                    <Card className={classes.root}>
                        <CardActionArea>

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    単回帰分析
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    一番簡単な線形回帰
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}

export default Home
