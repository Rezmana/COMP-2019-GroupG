<x-layout bodyClass="g-sidenav-show  bg-gray-200">
        <x-navbars.sidebar activePage="coordinates-table"></x-navbars.sidebar>
        <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
            <!-- Navbar -->
            <x-navbars.navs.auth titlePage="Coordinates Table"></x-navbars.navs.auth>
            <!-- End Navbar -->
            <div class="container-fluid py-4">
            <div class="row">
                    <div class="col-12">
                        <div class="card my-4">
                            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                                    <h6 class="text-white text-capitalize ps-3">Coordinates File Upload</h6>
                                </div>
                            </div>
                            <div class="card-body p-5">
                                <form action="{{ route('upload') }}" method="post" enctype="multipart/form-data">
                                    @csrf
                                    <div class="mb-3 col-md-12">
                                        <input type="file" name="excel_file" required>
                                        <p class="help-block">Please select a '.csv' file to upload</p>
                                    </div>
                                    <div class="col-md-12">
                                        <button type="submit" class="btn bg-gradient-success">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="card my-4">
                            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                                    <h6 class="text-white text-capitalize ps-3">Coordinates table</h6>
                                </div>
                            <div class="card-body px-0 pb-2">
                                <div class="table-responsive p-0">
                                    <table class="table align-items-center mb-0">
                                        <thead>
                                            <tr>
                                                <th
                                                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                    Latitude</th>
                                                <th
                                                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                                    Longitude</th>
                                                <th
                                                    class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                    Turtle ID</th>
                                                <th
                                                    class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                    Time</th>
                                                <th
                                                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                Edit/Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @foreach($coordinates as $coordinate) 
                                            <tr>
                                                <td class="ps-3">{{$coordinate->Latitude}}</td>
                                                <td class="">{{$coordinate->Longitude}}</td>
                                                <td class="text-center">{{$coordinate->TurtleID}}</td>
                                                <td class="text-center">{{$coordinate->Time}}</td>
                            
                                                <td class="text-center">
                                                    <a rel="tooltip" class="btn btn-success btn-link"
                                                        href="{{ url('coordinates-table/'.$coordinate->Latitude.'/'.$coordinate->Longitude.'/'.$coordinate->Time.'/edit') }}" 
                                                        data-original-title="" title="">
                                                        <i class="material-icons">edit</i>
                                                        <div class="ripple-container"></div>
                                                    </a>
                                                    <a rel="tooltip" class="btn btn-danger btn-link"
                                                        href="{{ url('coordinates-table/'.$coordinate->Latitude.'/'.$coordinate->Longitude.'/'.$coordinate->Time.'/delete') }}" 
                                                        data-original-title="" title="">
                                                        <i class="material-icons">close</i>
                                                        <div class="ripple-container"></div>
                                                    </a>
                                                </td>
                                            </tr>
                                            @endforeach
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <x-footers.auth></x-footers.auth>
            </div>
        </main>
        <x-plugins></x-plugins>

</x-layout>
