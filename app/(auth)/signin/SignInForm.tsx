'use client';

import { Input } from '@/components/ui/input';

import {
  CustomAuthCard,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/custom-auth-card';
import Link from 'next/link';
import GithubButton from '@/components/ui/GithubButton';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Icons } from '@/components/ui/icons';

import { useForm, type FieldValues } from 'react-hook-form';
import { createClient } from '@/lib/supabase/client';

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const router = useRouter();
  const supabase = createClient();

  const onSubmit = async (data: FieldValues) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });
      if (error) {
        toast.error('Wrong login Credentials');
      } else {
        router.push('/');
        router.refresh();
      }
    } catch (error) {
      toast.error('Wrong login Credentials');
    } finally {
      reset();
    }
  };
  return (
    <div className="flex h-full justify-center">
      <CustomAuthCard className="w-[380px]">
        <CardHeader></CardHeader>
        <CardContent className="grid gap-2">
          <div className="flex space-y-1 flex-col items-center text-center">
            <CardTitle>Welcome Back!</CardTitle>
            <CardDescription>Log in to your account</CardDescription>
          </div>

          <form
            className="flex flex-col space-y-2 items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label htmlFor="email"></label>
            <Input
              type="text"
              {...register('email', { required: 'Name is required' })}
              placeholder='email'
            />
            {errors.email && (
              <p className="text-xs text-red-500">
                {`${errors.email.message}`}
              </p>
            )}

            <label htmlFor="password"></label>
            <Input
              type="password"
              {...register('password', { required: 'Password is required' })}
              placeholder='password'
            />
            {errors.password && (
              <p className="text-xs text-red-500">
                {`${errors.password.message}`}
              </p>
            )}

            <Button disabled={isSubmitting} className="mt-2 w-full">
              {isSubmitting && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Sign in
            </Button>
          </form>
          <div className="flex flex-col text-center  space-y-2">
            <CardDescription>
              Forgot password? <Link href="/resetpassword">Reset</Link>
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
