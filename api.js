import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export function useAdminDashboardData() {
    return useSWR('https://api.socialverseapp.com/admin/dashboard', fetcher);
}