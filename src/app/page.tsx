import { AreaChartComponent } from "@/components/AreaChart";
import { CardUsageExample } from "@/components/CardStat";
import { DonutChartExample } from "@/components/DonutChar";
import FormExample from "@/components/FormExample";
import { ListUsageExample } from "@/components/ListExample";
import { TableExample } from "@/components/TableExample";
import { Card } from "@tremor/react"

function page(){
  return (
    
    <div className="container mx-auto pt-10 px-4 md:px-8">

      {/* <div className="grid grid-cols-4 gap-2"> */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* <div className="col-span-2 grid grid-cols-2 gap-4 px-7"> */}
        <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-2 gap-4">
          <CardUsageExample />
          <CardUsageExample />
        </div>
        <div className="md:col-span-2">
          <Card>
            <DonutChartExample />
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-5">
        <div className="md:col-span-2">
          <ListUsageExample />
          <div className="pt-5">
          <TableExample/>
          </div>
        </div>
        <div className="md:col-span-2">
          <Card>
            <AreaChartComponent />
          </Card>
          <Card className="mt-4">
            <FormExample/>
          </Card>
        </div>
      </div>

    </div>

  )
}

export default page;