import Image from 'next/image'
import logo from '@/public/logo.png'
import Container from '@/components/Container'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { StudentForm } from './components/StudentForm'
import { ParentForm } from './components/ParentForm'

const LoginPage = () => {
  return (
    <Container className="flex flex-col items-center gap-10">
      <h1 className="text-black">Login Page</h1>

      <Image src={logo} width={100} alt="College Logo" />

      <Tabs defaultValue="student" className="w-full max-w-[30rem]">
        <TabsList className="w-full">
          <TabsTrigger value="student">Student</TabsTrigger>
          <TabsTrigger value="parent">Parent</TabsTrigger>
        </TabsList>
        <TabsContent value="student">
          <Card>
            <CardHeader>
              <CardTitle>Student</CardTitle>
              <CardDescription>Enter student email and password</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <StudentForm />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="parent">
          <Card>
            <CardHeader>
              <CardTitle>Parent</CardTitle>
              <CardDescription>Enter parent email and password</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <ParentForm />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </Container>
  )
}

export default LoginPage
