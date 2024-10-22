import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddFiles = () => {
    const queryClient = useQueryClient();
    
    const handleAddFolderFiles = async (formData: FormData) => {
        const response = await fetch('http://localhost:5050/eplus', {
            method: "POST",
            body: formData
        });

        if(!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
        }

        const data = await response.json() as File[];
        return data;
    };

    return useMutation({
        mutationFn: handleAddFolderFiles,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['folder'] });
        }
    });
};