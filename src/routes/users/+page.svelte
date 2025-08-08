<script lang="ts">
  export let data: {
    countries: any[];
    nama: string | null;
    id: string | null;
    jabatan?: string | null;
  };

  console.log("Data countries:", data.countries);
  console.log("Nama:", data.nama);
  console.log("ID:", data.id);
  console.log("Jabatan:", data.jabatan);
</script>

<div class=" h-full w-full pb-6 pl-6 pr-6">
    <div class="border border-slate-300 rounded-xl h-full"></div>

</div>
