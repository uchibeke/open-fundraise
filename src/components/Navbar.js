import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "next/link";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Section from "components/Section";
import { useDarkMode } from "util/theme";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 37,
    marginRight: theme.spacing(2),
  },
  drawerList: {
    width: 250,
  },
  spacer: {
    flexGrow: 1,
  },
}));

function Navbar(props) {
  const classes = useStyles();

  const darkMode = useDarkMode();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuState, setMenuState] = useState(null);

  // Use inverted logo if specified
  // and we are in dark mode
  const logo =
    props.logoInverted && darkMode.value ? props.logoInverted : props.logo;

  const handleOpenMenu = (event, id) => {
    // Store clicked element (to anchor the menu to)
    // and the menu id so we can tell which menu is open.
    setMenuState({ anchor: event.currentTarget, id });
  };

  const handleCloseMenu = () => {
    setMenuState(null);
  };

  return (
    <Section bgColor={props.color} size="auto">
      <AppBar position="fixed" color="inherit" elevation={0}>
        <Container disableGutters={true}>
          <Toolbar>
            {/* <Link> */}
            <a href="/">
              <img src={logo} alt="Logo" className={classes.logo} />
            </a>
            {/* </Link> */}
            <div className={classes.spacer} />
            <Hidden mdUp={true} implementation="css">
              <IconButton
                onClick={() => {
                  setDrawerOpen(true);
                }}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Hidden smDown={true} implementation="css">
              <Link href="/#video" passHref={true}>
                <Button component="a" color="inherit">
                  Video
                </Button>
              </Link>
              <Link href="/#deck" passHref={true}>
                <Button component="a" color="inherit">
                  Pitch Deck
                </Button>
              </Link>
              <Link href="/#faq" passHref={true}>
                <Button component="a" color="inherit">
                  FAQ
                </Button>
              </Link>
              <Box component="span" ml={1}>
                <Link href="/invest" passHref={true}>
                  <Button variant="contained" color="primary" component="a">
                    Invest now
                  </Button>
                </Link>
              </Box>
              <IconButton
                color="inherit"
                onClick={darkMode.toggle}
                style={{ opacity: 0.6 }}
              >
                {darkMode.value && <NightsStayIcon />}

                {!darkMode.value && <WbSunnyIcon />}
              </IconButton>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List
          className={classes.drawerList}
          onClick={() => setDrawerOpen(false)}
        >
          <Link href="/#video" passHref={true}>
            <ListItem component="a" button={true}>
              <ListItemText>Video</ListItemText>
            </ListItem>
          </Link>
          <Link href="/#deck" passHref={true}>
            <ListItem component="a" button={true}>
              <ListItemText>Pitch Deck</ListItemText>
            </ListItem>
          </Link>
          <Link href="/#faq" passHref={true}>
            <ListItem component="a" button={true}>
              <ListItemText>FAQ</ListItemText>
            </ListItem>
          </Link>
          <ListItem>
            <Link href="/invest" passHref={true}>
              <Button variant="contained" color="primary" component="a">
                Invest now
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <IconButton
              color="inherit"
              onClick={darkMode.toggle}
              style={{ opacity: 0.6 }}
            >
              {darkMode.value && <NightsStayIcon />}

              {!darkMode.value && <WbSunnyIcon />}
            </IconButton>
          </ListItem>
        </List>
      </Drawer>
    </Section>
  );
}

export default Navbar;
