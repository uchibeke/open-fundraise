import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    paddingBottom: "56.25%",
    paddingTop: "30px",
    height: 0,
    overflow: "hidden",
  },
  frame: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
}));

function VideoEmbed(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <iframe
        className={classes.frame}
        src={`${props.url}?modestbranding=0&autohide=0`}
        allowFullScreen={true}
        frameBorder={0}
        title="Startup Video"
      />
    </div>
  );
}

export default VideoEmbed;
