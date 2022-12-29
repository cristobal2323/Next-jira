import { FC, PropsWithChildren } from "react";
import Head from "next/head";
import { Box } from "@mui/system";
import { Navbar, Sidebar } from "../ui";

interface Props extends PropsWithChildren {
  title?: string;
}

export const Layout: FC<Props> = ({ title = "OpenJira", children }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <Sidebar />
      <Box sx={{ paddingTop: "10px 20px" }}>{children}</Box>
    </Box>
  );
};
