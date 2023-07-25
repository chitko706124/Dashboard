import {
  Navbar,
  Group,
  Code,
  ScrollArea,
  createStyles,
  rem,
  getStylesRef,
} from "@mantine/core";
import { IconCalendarStats, IconLock, IconNotes } from "@tabler/icons-react";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { NavLink } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../redux/sideSlice";
import { TbAdjustments } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import { BiGroup } from "react-icons/bi";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const mockdata = [
  {
    title: "Pages",
    label: "Dashboard",
    Icon: <TbAdjustments />,
    child: [
      { label: "Default", link: "/" },
      { label: "Analytics", link: "/analytics" },
      { label: "DataTable", link: "/datatable" },
      { label: "Social", link: "/social" },
    ],
  },
  {
    label: "Pages",
    Icon: <IconNotes size="1rem" stroke={1.5} />,
    initiallyOpened: true,
    child: [
      { label: "Profile", link: "/profiles" },
      { label: "Settings", link: "/setting" },
      { label: "Clients", link: "/clients" },

      { label: "Invoice", link: "/invoice" },
      { label: "Pricing", link: "/pricing" },
      { label: "Tasks", link: "/task" },
      { label: "Chat", link: "/chat" },
    ],
    subChild: [
      { label: "List", link: "/list" },
      { label: "Detail", link: "/detail" },
    ],
  },
  {
    label: "Auth",
    Icon: <BiGroup className=" text-white" size="1rem" stroke={1.5} />,
    initiallyOpened: true,
    child: [
      { label: "SignIn", link: "/signin" },
      { label: "SignUp", link: "/signup" },
    ],
    subChild: [
      { label: "Overview", link: "/" },
      { label: "Forecasts", link: "/" },
      { label: "Outlook", link: "/" },
      { label: "Real time", link: "/" },
    ],
  },
  {
    label: "Create Users",
    icon: <IconCalendarStats />,
    child: [{ label: "Form", link: "/form" }],
  },
  //   { label: 'Analytics', icon: IconPresentationAnalytics },
  //   { label: 'Contracts', icon: IconFileAnalytics },
  //   { label: 'Settings', icon: IconAdjustments },
  {
    title: "Tools",
    label: "Security",
    icon: <IconLock />,
    links: [
      { label: "Enable 2FA", link: "/" },
      { label: "Change password", link: "/" },
      { label: "Recovery codes", link: "/" },
    ],
    child: [
      { label: "Clients", link: "/clients" },
      { label: "Forecasts", link: "/" },
      { label: "Outlook", link: "/" },
      { label: "Real time", link: "/" },
    ],
  },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    // borderBottom: `${rem(1)} solid ${
    //   theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    // }`,
  },

  links: {
    ...theme.fn.focusStyles(),
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    padding: "5px 0",
    position: "relative",
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
  },
  linkActive: {
    "&, &:focus": {
      backgroundColor: "#384b75",
      color: "#fff",
      opacity: 1,
    },
    "&, &:hover": {
      backgroundColor: "#162c5c",
      borderRadius: "0.5rem",
      opacity: ".5",
    },
  },
}));

export function SideBar() {
  const { classes } = useStyles();
  const [key, setKey] = useState();
  const sideSelector = useSelector((state) => state.side.side);
  const dispatch = useDispatch();
  const path = useLocation();
  console.log(path);

  const authToken = useSelector((state) => state.authSlice.token);
  const token = Cookies.get("token");

  useEffect(() => {
    setKey(authToken);
    console.log(key);
  }, [authToken]);

  return (
    // min-w-[200px]
    <div
      className={`
        ${
          token && path.pathname !== "/signin" && path.pathname !== "/signup"
            ? ` h-screen z-50 block bg-darkBlue text-white shadow
      ${sideSelector ? "sideAni  " : "  sideRight"}
       p-5 !overflow-y-auto xl:w-[15%] w-[200px] !fixed   top-0 left-0 
       ${sideSelector ? "-left-[-0%]" : "-left-[120%]"}`
            : " hidden"
        }
            ${
              path.pathname === "/signin" &&
              path.pathname === "/signup" &&
              "hidden"
            }
      `}
    >
      <Navbar.Section className={classes.header}>
        <Group position="center">
          {/* <Logo width={rem(120)} /> */}
          {sideSelector && (
            <AiOutlineClose
              size={30}
              className=" hidden text-white cursor-pointer"
              onClick={() => dispatch(toggle())}
            />
          )}
          <div className=" flex justify-center items-center">
            <div className=" flex justify-between gap-[14px] items-center">
            

              <img className=" w-6 h-6" src={"/travel.png"} alt="" />

              <p className=" text-white font-bold">Travel Tour </p>
              <p className=" text-white text-[20px] sm:hidden">
                <AiOutlineClose
                  className=" shadow border rounded-full border-[#00000025] px-[2px] -me-5"
                  onClick={() => dispatch(toggle())}
                />
              </p>
            </div>
          </div>
        </Group>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>
          {mockdata.map(({ label, Icon, child, subChild, title }, index) => {
            return (
              <div key={index}>
                <p className=" text-slate-600 ps-4">{title}</p>
                <NavLink
                  className="text-white rounded-lg"
                  label={label}
                  icon={Icon}
                  childrenOffset={28}
                  component={"a"}
                >
                  {child?.map(({ label, link }, index) => {
                    return (
                      <Link key={index} to={link}>
                        <NavLink
                          className={`${classes.linkActive} text-white rounded-lg"`}
                          label={label}
                        />
                      </Link>
                    );
                  })}

                  {subChild && (
                    <NavLink
                      key={index}
                      className={` text-white rounded-lg"`}
                      label={subChild && "Projects"}
                      childrenOffset={subChild && 28}
                    >
                      {subChild?.map(({ label, link }, index) => {
                        return (
                          <Link to={link}>
                            {" "}
                            <NavLink
                              className={`${classes.linkActive} text-white rounded-lg"`}
                              key={index}
                              label={label}
                            />
                          </Link>
                        );
                      })}
                    </NavLink>
                  )}
                </NavLink>
              </div>
            );
          })}
        </div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        {/* <UserButton
          image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          name="Ann Nullpointer"
          email="anullpointer@yahoo.com"
        /> */}
      </Navbar.Section>
    </div>
  );
}
