import { auth } from "@/lib/auth"
import { getDataProduct } from "../../../api/ropository"
import DataTable from "./data-table"
import { toast, useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import useErrorToast from "@/components/error-toas";

export default async function ProductPage({ params }: { params: { id: string } }) {

  try {
    const resp = getDataProduct(params.id);
    const [response] = await Promise.all([resp]);

    if (!response) {
      console.log("ERROR FETCH2")
      throw new Error("No response data");
    }

    return (
      <div style={{ padding: '20px' }}>
        <DataTable data={response} />
      </div>
    );
  } catch (error) {
    
  }
}
