"use server";
import { redirect } from "next/navigation";
import PocketBase from "pocketbase";

export async function signUp(data) {
  const pb = new PocketBase("http://127.0.0.1:8090");
  const res = await pb.collection("users").create({
    email: "akldfjakl@gmail.com",
    password: "qMXWMq14chluRLa",
    passwordConfirm: "qMXWMq14chluRLa",
    username: "Heisenbug",
  });
  redirect("/");
}
