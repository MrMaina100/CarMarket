import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import Link from 'next/link';
import GithubButton from '@/components/ui/GithubButton';

import {
  CustomAuthCard,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/custom-auth-card';

//server action
import { handleSignUp } from '@/app/actions/auth';

export default function page() {
  return (
    <div className="flex justify-center">
      <CustomAuthCard className="w-[380px]">
        <CardHeader></CardHeader>
        <CardContent className="grid gap-2">
          <div className="flex space-y-1 flex-col items-center text-center">
            <CardTitle>Turbo Trader</CardTitle>
            <CardTitle>Create your account</CardTitle>
            <CardDescription>
              You can sign up with email or use Github to create your account
            </CardDescription>
          </div>

          <form
            className="flex flex-col space-y-2 items-center"
            action={handleSignUp}
          >
            <label htmlFor="user_name"></label>
            <Input
              type="text"
              id="user_name"
              name="user_name"
              placeholder="username"
            />
            <label htmlFor="email"></label>
            <Input type="email" id="email" name="email" placeholder="email" />
            <label htmlFor="password"></label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
            <Button type="submit" className="w-full">
              Continue
            </Button>
          </form>
          <div className="flex flex-col text-center  space-y-2">
            <CardDescription>
              Already have an account? <Link href="/signin">Log in</Link>
            </CardDescription>
            <div className="relative mt-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs  uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
          </div>

          <GithubButton />
        </CardContent>
      </CustomAuthCard>
    </div>
  );
}
