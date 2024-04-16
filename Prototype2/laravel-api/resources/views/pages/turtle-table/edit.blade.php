<x-layout bodyClass="g-sidenav-show bg-gray-200">

    <x-navbars.sidebar activePage="turtle-table"></x-navbars.sidebar>
    <div class="main-content position-relative bg-gray-100 max-height-vh-100 h-100">
        <!-- Navbar -->
        <x-navbars.navs.auth titlePage='Turtle Table'></x-navbars.navs.auth>
        <!-- End Navbar -->
    
    
    <div class="container-fluid py-4">
            <div class="row">
                <div class="col-12">
                    <div class="card my-4">
                        <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                                <h6 class="text-white mx-3">
                                    <strong>Edit Row</strong>
                                </h6>
                            </div>
                        </div>
                        <form method='POST' action='{{ url('turtle-table/'.$turtle->TurtleID.'/'.$turtle->Name.'/'.$turtle->Species.'/edit') }}'>
                            @csrf
                            @method('PUT')
                            <div class="py-1 px-3">    
                                <div class="mb-3 col-md-12">
                                    <label class="form-label">TurtleID</label>
                                    <input type="text" name="TurtleID" class="form-control border border-2 p-2" value='{{ $turtle->TurtleID }}'>
                                    @error('TurtleID') <p class='text-danger inputerror'>{{ $message }} </p> @enderror
                                </div>

                                <div class="mb-3 col-md-12">
                                    <label class="form-label">Name</label>
                                    <input type="text" name="Name" class="form-control border border-2 p-2" value='{{ $turtle->Name }}'>
                                    @error('Humidity') <p class='text-danger inputerror'>{{ $message }} </p> @enderror
                                </div>
                                
                                <div class="mb-3 col-md-12">
                                    <label class="form-label">Species</label>
                                    <input type="text" name="Species" class="form-control border border-2 p-2" value='{{ $turtle->Species }}'>
                                    @error('Species') <p class='text-danger inputerror'>{{ $message }} </p> @enderror
                                </div>
                        
                                <button type="submit" class="btn bg-gradient-dark">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <x-footers.auth></x-footers.auth>
        </div>
</div>
</x-layout>
