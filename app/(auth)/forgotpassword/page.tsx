import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  CustomAuthCard,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/custom-auth-card';

import { passwordReset } from '@/app/actions/auth';

export default function page() {
  return (
    <div className="flex justify-center">
      <CustomAuthCard className="w-[380px]">
        <CardHeader>
          <CardTitle>Turbo Trader</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-2">
          <div className="flex space-y-1 flex-col items-center text-center">
            <CardTitle>Forgot Your Password</CardTitle>
            <CardDescription>Time for a reset</CardDescription>
          </div>

          <form
            className="flex flex-col space-y-2 items-center"
            action={passwordReset}
          >
            <label htmlFor="email"></label>
            <Input type="email" id="email" name="email" placeholder="email" />
            <Button type="submit" className="w-full">
              Reset Password
            </Button>
          </form>
        </CardContent>
      </CustomAuthCard>
    </div>
  );
}