// app/login/page.tsx
'use client';

import { useActionState } from "react";
import { handleLogin } from "@/actions/login";

export default function LoginPage() {
  // useActionState manages the state returned by the Server Action
  const [state, formAction, isPending] = useActionState(handleLogin, null);

  return (
    <form action={formAction} className="flex flex-col gap-4 max-w-sm m-auto">
      <div>
        <label>Email</label>
        <input type="email" name="email" className="border p-2 w-full" />
        {state?.errors?.email && (
          <p className="text-red-500 text-sm">{state.errors.email[0]}</p>
        )}
      </div>

      <div>
        <label>Password</label>
        <input type="password" name="password" className="border p-2 w-full" />
        {state?.errors?.password && (
          <p className="text-red-500 text-sm">{state.errors.password[0]}</p>
        )}
      </div>

      <button type="submit" disabled={isPending} className="bg-blue-500 text-white p-2">
        {isPending ? "Logging in..." : "Login"}
      </button>

      {state?.success && <p className="text-green-500">{state.message}</p>}
    </form>
  );
}
