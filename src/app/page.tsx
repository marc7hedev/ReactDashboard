import { AreaChartComponent } from "@/components/AreaChart";
import { CardUsageExample } from "@/components/CardStat";
import FormExample from "@/components/FormExample";
import { ListUsageExample } from "@/components/ListExample";
import { TableExample } from "@/components/TableExample";
import { Card } from "@tremor/react"

function page(){
  return (
    
    <div className="container mx-auto pt-10">

      <div className="grid grid-cols-4 gap-2">
        <CardUsageExample />
        <CardUsageExample />
        <CardUsageExample />
        <CardUsageExample />
        <CardUsageExample />
        <CardUsageExample />
        <CardUsageExample />
        <CardUsageExample />
      </div>

      <div className="grid grid-cols-4 mt-10">
        <div className="col-span-2 px-7">
          <ListUsageExample />
          <div className="pt-5">
          <TableExample/>
          </div>
        </div>
        <div className="col-span-2 px-7">
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