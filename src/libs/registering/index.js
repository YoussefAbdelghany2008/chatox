"use server"
import {signIn as authSignIn} from "@/auth";

const signIn = async (formData) => {
    const action = formData.get("action");
    await authSignIn(action, {
        redirectTo: '/auth/verification',
    });
};

export  { signIn };