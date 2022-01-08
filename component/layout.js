import Link from 'next/link'
import { useState } from "react";
import styles from "../styles/Layout.module.css";
import styles2 from '../styles/Home.module.css'
import Image from 'next/image'
import Header from './header'
export default function Layout({ children }) {


    return <>
        <Header></Header>
        {children} 

    </>
}