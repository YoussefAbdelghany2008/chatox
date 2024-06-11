'use client';

import { useState, useEffect } from "react";
import Layout from "@/components/layout";
//import ____ from "@/containers/chat/____";

export default function Chat() {
    return (
       <Layout>
             <main className="grid grid-cols-11 h-screen">
                <section className="col-span-3 bg-blue-500 opacity-20"></section>
                <section className="col-span-5 bg-red-500 opacity-20"></section>
                <section className="col-span-3 bg-yellow-500 opacity-20"></section>
            </main>
       </Layout>
    );
}