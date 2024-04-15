"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { Container, CssBaseline, Hidden, ThemeProvider } from "@mui/material";
import { AppProps } from "next/app";
import theme from "@/styles/theme";
import Header from "@/shared/components/header";
import { useEffect, useState } from "react";
import HomePage from "../[home]";
// import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

interface AuthLayoutProps extends AppProps {
  children: React.ReactNode; // Children to be passed as components
}

export default function AuthLayout({
  Component,
  pageProps,
  children,
}: AuthLayoutProps) {

  return (
        <Component {...pageProps}>{children}</Component>
  );
}
