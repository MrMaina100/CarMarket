import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  CustomAuthCard,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/custom-auth-card';
import { updatePassword } from '@/app/actions/auth';

export default function page() {
  return (
    <div className="flex justify-center">
      <CustomAuthCard className="w-[380px]">
        <CardHeader>
          <CardTitle>Turdo Trader</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-2">
          <div className="flex space-y-1 flex-col items-center text-center">
            <CardTitle>Update Your Password</CardTitle>
            <CardDescription>Your new Password moving forward</CardDescription>
          </div>

          <form
            className="flex flex-col space-y-2 items-center"
            action={updatePassword}
          >
            <label htmlFor="password"></label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="newpassword"
            />
            <Button type="submit" className="w-full">
              Continue
            </Button>
          </form>
        </CardContent>
      </CustomAuthCard>
    </div>
  );
}
