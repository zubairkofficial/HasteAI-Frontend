import { Signika_Negative } from "next/font/google";
import Image from "next/image";
import SignIn from "./(auth)/sign-in/page";

export default function Base() {
  return (
    <main >
   <SignIn />
    </main>
  );
}
