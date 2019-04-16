import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { BranchDetailsService } from '../../services/branch-details.service'
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {

  cities: string[] = ['BANGALORE', 'LUCKNOW', 'GURGAON', 'MUMBAI', 'HYDERABAD'];
  city: string;
  displayedColumns: string[] = ['position', 'name', 'branch', 'ifsc', 'address', 'district', 'state'];
  dataSource: any;
  totalSize: any;
  showPaginator = false;
  show = false;
  searchValue: string = '';

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private branchInfo: BranchDetailsService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  // Function to get Bank Details of a City
  getBranchDetails(event) {
    this.show = true;
    this.dataSource = '';
    this.searchValue = null;
    this.city = event.target.innerText.trim();
    this.branchInfo.getBranchInfo(this.city).subscribe(
      data => {
        this.showPaginator = true;
        let result: any = data;
        this.dataSource = new MatTableDataSource(result);
        this.cdr.detectChanges();
        this.show = false;
        this.dataSource.paginator = this.paginator;
        this.totalSize = result.length;
      }
    )
  }
  
  // Function to filter values in the Table
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
