/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        
        remotePatterns:[
            {
                protocol:'https',
                hostname: 'uqvgrgiggdjwexfirrqu.supabase.co'
            },
            {
                protocol:'https',
                hostname:'avatars.githubusercontent.com'
            }
        ]
    }
}

module.exports = nextConfig 