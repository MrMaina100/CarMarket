'use client';

import { Input } from '@/components/ui/input';

import Link from 'next/link';
import GithubButton from '@/components/ui/GithubButton';

import {
  CustomAuthCard,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/custom-auth-card';

import { useForm, type FieldValues } from 'react-hook-form';
import { createClient } from '@/lib/supabase/client';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';

export default function SignupForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const supabase = createClient();
  const router = useRouter();

  const onSubmit = async (data: FieldValues) => {
    try {
      const { error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          emailRedirectTo: `${location.origin}/api/auth/confirm`,
          data: {
            user_name: data.user_name,
          },
        },
      });

      if (error) {
        toast.error(error.message);
      } else {
        router.push('/confirmation');
      }
    } catch (error) {
      console.log('Something went wrong');
    } finally {
      reset();
    }
  };
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
            onSubmit={handleSubmit(onSubmit)}
          >
            <label htmlFor="user_name"></label>
            <Input
              type="text"
              {...register('user_name', { required: 'UserName is required' })}
              placeholder="username"
            />
            {errors.user_name && (
              <p className="text-xs text-red-500">
                {`${errors.user_name.message}`}
              </p>
            )}

            <label htmlFor="email"></label>
            <Input
              type="email"
              {...register('email', { required: 'Email is required' })}
              placeholder="name@example.com"
            />
            {errors.email && (
              <p className="text-xs text-red-500">
                {`${errors.email.message}`}
              </p>
            )}

            <label htmlFor="password"></label>
            <Input
              type="password"
              {...register('password', { required: 'Must create a password' })}
              placeholder="password"
            />
            {errors.password && (
              <p className="text-xs text-red-500">
                {`${errors.password.message}`}
              </p>
            )}

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Sign Up
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
