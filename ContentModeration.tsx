import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContentModeration({ content }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Content Moderation</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Daily Views</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{content.dailyViews}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Shares</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{content.shares}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Comments</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{content.comments}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Post Exits</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{content.postExits}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}